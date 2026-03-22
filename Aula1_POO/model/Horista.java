package Aula1_POO.model;

public class Horista extends Employee {
    private Double salarioHora;
    private Double numeroHora;
    private Integer diasFalta;

    public Horista() {
        super();
    }

    public Horista(Double salarioHora, Double numeroHora, Integer diasFalta) {
        this.salarioHora = salarioHora;
        this.numeroHora = numeroHora;
        this.diasFalta = diasFalta;
    }

    public Double getSalarioHora(){
        return this.salarioHora;
    }

    public void setSalarioHora(Double salarioHora) {
        this.salarioHora = salarioHora;
    }

    public Double getNumeroHora(){
        return this.numeroHora;
    }

    public void setNumeroHora(Double numeroHora) {
        this.numeroHora = numeroHora;
    }

    public Integer getDiasFalta(){
        return this.diasFalta;
    }

    public void setDiasFalta(Integer diasFalta) {
        this.diasFalta = diasFalta;
    }

    @Override
    public double SalarioBruto(){
        return salarioHora * numeroHora;
    }

    // @Override
    // public int TempoTrabalho(){
    //     //TO-DO FUNCTION
    // }
}
