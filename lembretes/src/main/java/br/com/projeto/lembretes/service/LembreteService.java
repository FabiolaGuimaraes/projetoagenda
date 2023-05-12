package br.com.projeto.lembretes.service;

import br.com.projeto.lembretes.entity.Lembrete;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class LembreteService {

    private List<Lembrete> listaDeLembretes;

    public LembreteService() {
        this.listaDeLembretes = new ArrayList<>();
        Lembrete test = new Lembrete("Novo lembrete", LocalDate.now());
        this.listaDeLembretes.add(test);
    }

    public void criarLembrete(Lembrete lembrete) {
        this.listaDeLembretes.add(lembrete);
    }

    public List<Lembrete> getLembretes() {
        return this.listaDeLembretes;
    }
}
