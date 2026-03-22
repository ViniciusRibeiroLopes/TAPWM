package Aula1_POO.model;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.util.Date;

public abstract class Employee {

    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
    private Integer matricula;
    private String nomeEmpregado;
    private Instant dataEntradaEmpresa;
    
    public Employee(){}

    public Employee(Integer matricula, String nomeEmpregado, Date dataEntradaEmpresa){

    }

    public Integer getMatricula() {
        return this.matricula;
    }

    public void setMatricula(Integer matricula){
        this.matricula = matricula;
    }

    public String getNomeEmpregado() {
        return this.nomeEmpregado;
    }

    public void setNomeEmpregado(String nomeEmpregado) {
        this.nomeEmpregado = nomeEmpregado;
    }

    public Instant getDataEntradaEmpresa() {
        return this.dataEntradaEmpresa;
    }

    public void setDataEntradaEmpresa(Instant dataEntradaEmpresa) {
        this.dataEntradaEmpresa = dataEntradaEmpresa;
    }

    public int TempoTrabalho(){
        Instant time = Instant.now();
        long seconds = time.getEpochSecond() - dataEntradaEmpresa.getEpochSecond();
        return (int) (seconds / (60*60*24*365));
    }

    public abstract double SalarioBruto();

}