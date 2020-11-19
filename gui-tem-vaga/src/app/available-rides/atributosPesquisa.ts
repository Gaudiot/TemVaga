export class AtributosPesquisa {
    partidaRua: string;
    partidaNum: number;
    destinoRua: string;
    destinoNum: number;
    valorMax: number;
    data: Date;
    hora: Date;

    constructor() {
        this.partidaRua = ""
        this.partidaNum = null
        this.destinoRua = ""
        this.destinoNum = null
        this.valorMax = null
        this.data = null
        this.hora = null
    }
}