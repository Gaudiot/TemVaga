import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/services/ride.service';
import Ride from '../../../../common/src/Ride/ride';
import { AtributosPesquisa } from './atributosPesquisa'

@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css']
})
export class AvailableRidesComponent implements OnInit {

  constructor(private rideService: RideService ) { }

  caronasdisp: Ride[] = [];
  caronadesejada: Ride
  atributosPesquisa: AtributosPesquisa = {partidaRua: "", partidaNum: null, destinoRua: "", destinoNum: null, valorMax: null, data: null}
  pesquisa: boolean = false;

 /* pesquisarCarona(partR: string, partN: number, destR: string, destN: number, valor: number, d : Date): void {
    this.atributosPesquisa = {partidaRua: "", partidaNum: null, destinoRua: "", destinoNum: null, valorMax: null, data: null}
    this.atributosPesquisa = {partidaRua: partR, partidaNum: partN, destinoRua: destR, destinoNum: destN, valorMax: valor, data: d}*/
    pesquisarCarona(atributos: AtributosPesquisa): void {
    this.atributosPesquisa = {partidaRua: "", partidaNum: null, destinoRua: "", destinoNum: null, valorMax: null, data: null}
    this.atributosPesquisa = atributos;
    this.caronadesejada.price = this.atributosPesquisa.valorMax
    this.caronadesejada.departureTime = this.atributosPesquisa.data
    this.caronadesejada.route.departurePlace.street = this.atributosPesquisa.partidaRua
    this.caronadesejada.route.departurePlace.number = this.atributosPesquisa.partidaNum
    this.caronadesejada.route.arrivalPlace.street = this.atributosPesquisa.destinoRua
    this.caronadesejada.route.arrivalPlace.number = this.atributosPesquisa.destinoNum

    this.caronasdisp = [];
    this.rideService.getFilteredRides(this.caronadesejada)
                    .subscribe(
                      caronasdisp => this.caronasdisp = caronasdisp,
                      error => console.error('Não há caronas cadastradas') // Verificar como tratar erro
                    );
    
    this.pesquisa = true;
}

  ngOnInit(): void {
    this.caronasdisp = [];
    this.rideService.getAllRides()
                    .subscribe(
                      caronasdisp => this.caronasdisp = caronasdisp,
                      error => console.error('Não há caronas cadastradas') // Verificar como tratar erro
                    );
    
    this.pesquisa = true;
  }

}
