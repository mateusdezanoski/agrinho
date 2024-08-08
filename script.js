import java.util.ArrayList;
import java.util.Scanner;

public class SistemaVendas {
    private ArrayList<Trator> tratores;
    private Scanner scanner;

    public SistemaVendas() {
        tratores = new ArrayList<>();
        scanner = new Scanner(System.in);
    }

    public void adicionarTrator(Trator trator) {
        tratores.add(trator);
    }

    public void listarTratores() {
        for (Trator trator : tratores) {
            System.out.println(trator);
        }
    }

    public void realizarVenda() {
        System.out.println("Digite o modelo do trator para compra:");
        String modelo = scanner.nextLine();
        System.out.println("Digite a quantidade desejada:");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer

        for (Trator trator : tratores) {
            if (trator.getModelo().equalsIgnoreCase(modelo)) {
                if (trator.vender(quantidade)) {
                    double totalVenda = quantidade * trator.getPreco();
                    System.out.printf("Venda realizada! Total: R$%.2f%n", totalVenda);
                }
                return;
            }
        }
        System.out.println("Trator não encontrado.");
    }

    public void atualizarEstoque() {
        System.out.println("Digite o modelo do trator para atualizar o estoque:");
        String modelo = scanner.nextLine();
        System.out.println("Digite a quantidade a adicionar (ou remover, se negativo):");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer

        for (Trator trator : tratores) {
            if (trator.getModelo().equalsIgnoreCase(modelo)) {
                trator.atualizarEstoque(quantidade);
                System.out.printf("Estoque atualizado para o modelo %s.%n", modelo);
                return;
            }
        }
        System.out.println("Trator não encontrado.");
    }

    publica static main(String[] args) {
        Sistema Vendas sistema = new SistemaVendas();
        sistema.adicionarTrator(new Trator("Modelo A", 2022, 120000.00, 10));
        sistema.adicionarTrator(new Trator("Modelo B", 2023, 150000.00, 5));

        while (true) {
            System.out.println("\n--- Sistema de Vendas de Tratores ---");
            System.out.println("1. Listar tratores");
            System.out.println("2. Realizar venda");
            System.out.println("3. Atualizar estoque");
            System.out.println("4. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = sistema.scanner.nextInt();
            sistema.scanner.nextLine(); // Limpar o buffer

            switch (opcao) {
                case 1:
                    sistema.listarTratores();
                    break;
                case 2:
                    sistema.realizarVenda();
                    break;
                case 3:
                    sistema.atualizarEstoque();
                    break;
                case 4:
                    System.out.println("Saindo...");
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }