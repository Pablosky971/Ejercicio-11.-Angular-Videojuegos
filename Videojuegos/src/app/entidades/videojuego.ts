export class Videojuego {

    private _id: number = 0;
    private _titulo: string = "";
    private _compania: string = "";
    
    private _valoracionMedia: number = 0;
    
    

    private static contadorId: number = 1;

    constructor(titulo: string, compania: string, valoracionMedia: number) {
        this._id = Videojuego.contadorId++;
        this._titulo = titulo;
        this._compania=compania;
        this._valoracionMedia=valoracionMedia;
    }
    

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get compania(): string {
        return this._compania;
    }
    public set compania(value: string) {
        this._compania = value;
    }

    public get valoracionMedia(): number {
        return this._valoracionMedia;
    }
    public set valoracionMedia(value: number) {
        this._valoracionMedia = value;
    }

    
    

    
}