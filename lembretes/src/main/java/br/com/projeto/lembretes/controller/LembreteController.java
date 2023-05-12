package br.com.projeto.lembretes.controller;

import br.com.projeto.lembretes.entity.Lembrete;
import br.com.projeto.lembretes.service.LembreteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LembreteController {

    private LembreteService lembreteService;

    public LembreteController() {
        this.lembreteService = new LembreteService();
    }

    @PostMapping("/lembretes")
    public void criarLembrete(@RequestBody Lembrete lembrete) {
        this.lembreteService.criarLembrete(lembrete);
    }

    @GetMapping("/lembretes")
    public List<Lembrete> listaLembretes() {
        return this.lembreteService.getLembretes();
    }
}