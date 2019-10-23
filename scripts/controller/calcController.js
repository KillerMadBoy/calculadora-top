class CalcController {

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
       

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        console.log(buttons);

        buttons.forEach(btn=>{

            btn.addEventListener('click', e=> {
                
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
        })



    }

    setDisplayDateTime(){

        let date = new Date();

        this._dateEl.innerHTML = date.toLocaleDateString("pt-BR");
        this._timeEl.innerHTML = date.toLocaleTimeString("pt-BR");

    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this.currentDate = valor;
    }
}
