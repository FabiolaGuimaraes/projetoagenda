package br.com.projeto.lembretes.entity;

import java.time.LocalDate;

public class Lembrete {

    public Lembrete(String nome, LocalDate data) {
        this.nome = nome;
        this.data = data;
    }

    private String nome;
    private LocalDate data;

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
}
