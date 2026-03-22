package Aula1_POO.model;

public class Mensalista extends Employee {
    private Double salarioMensal;

    public Mensalista(){
        super();
    }

    public Mensalista(Double salarioMensal){
        this.salarioMensal = salarioMensal;
    }

    public Double getSalarioMensal(){
        return this.salarioMensal;
    }

    public void setSalarioMensal(Double salarioMensal){
        this.salarioMensal = salarioMensal;
    }

    @Override
    public double SalarioBruto(){
        return getSalarioMensal();
    }
}
