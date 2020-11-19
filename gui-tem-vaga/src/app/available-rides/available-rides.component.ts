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
  caronadesejada: Ride;
  atributosPesquisa: AtributosPesquisa = new AtributosPesquisa() 
  pesquisa: boolean = false;

    pesquisarCarona(atributos: AtributosPesquisa): void {
    this.atributosPesquisa = {partidaRua: "", partidaNum: null, destinoRua: "", destinoNum: null, valorMax: null, data: null, hora: null}
    this.atributosPesquisa = atributos;
    this.caronadesejada.route.departurePlace.street = this.atributosPesquisa.partidaRua
    this.caronadesejada.route.departurePlace.number = this.atributosPesquisa.partidaNum
    this.caronadesejada.route.arrivalPlace.street = this.atributosPesquisa.destinoRua
    this.caronadesejada.route.arrivalPlace.number = this.atributosPesquisa.destinoNum
    this.caronadesejada.price = this.atributosPesquisa.valorMax
    this.caronadesejada.departureTime = this.atributosPesquisa.data
    //Ajeitar hora e data em ride
    //this.caronadesejada.hora = this.atributosPesquisa.hora

    this.caronasdisp = [];
    this.rideService.getAllRides()
    .subscribe(
      caronasdisp => this.caronasdisp = caronasdisp,
      error => console.error('Não há caronas cadastradas', error) // Verificar como tratar erro
    );

    this.caronasdisp.filter(r => r.route.departurePlace == this.caronadesejada.route.departurePlace)//Realmente terá que partir do mesmo lugar?
    this.caronasdisp.filter(r => r.route.arrivalPlace == this.caronadesejada.route.arrivalPlace)
    if(this.caronadesejada.price != null) {
      this.caronasdisp.filter(r => r.price <= this.caronadesejada.price)
    }
    if(this.caronadesejada.departureTime != null) {
      this.caronasdisp.filter(r => r.departureTime == this.caronadesejada.departureTime)
    }
    console.log('Oi')
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
