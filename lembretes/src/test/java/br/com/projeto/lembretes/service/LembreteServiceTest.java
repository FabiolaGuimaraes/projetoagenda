package br.com.projeto.lembretes.service;

import br.com.projeto.lembretes.entity.Lembrete;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LembreteServiceTest {

    @Test
    public void deveCriarLembrete() {
        LembreteService lembreteService = new LembreteService();

        Lembrete test = new Lembrete("Test", LocalDate.now());
        Lembrete test2 = new Lembrete("Test2", LocalDate.now());

        lembreteService.criarLembrete(test);
        lembreteService.criarLembrete(test2);

        List<Lembrete> lembretes = lembreteService.getLembretes();

        assertEquals(2, lembretes.size());

    }
}
