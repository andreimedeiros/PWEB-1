class ContaEspecial extends Conta {
    constructor(numero, saldo) {
    super(numero, saldo);
}

    get ContaEspecial() {
        return this._ContaEspecial;
}

    set ContaEspecial(ContaEspecial) {
        this._ContaEspecial = ContaEspecial;
    
}
}


class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, ContaEspecial) {
        super(nome, cpf, conta);
           /*this._nome = nome;
            this._cpf = cpf;
            this._conta = conta;*/
        this._ContaEspecial = ContaEspecial;
    }

    get ContaEspecial() {
        return this._ContaEspecial;
    }

    set ContaEspecial(ContaEspecial) {
        this._ContaEspecial = ContaEspecial;
    }
    
    saldoTotal() {
        return this.conta.saldo + this.ContaEspecial.saldo;
    }
}

