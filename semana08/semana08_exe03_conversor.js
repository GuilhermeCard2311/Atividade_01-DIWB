import promptSync from 'prompt-sync';
const prompt = promptSync();

class Conversor {
  static celsiusParaFahrenheit(celsius) {
    return (Number(celsius) * 1.8) + 32;
  }

  static quilometrosParaMilhas(km) {
    return Number(km) * 0.621371;
  }

  static quilosParaLibras(kg) {
    return Number(kg) * 2.20462;
  }
}

function main() {
  let opcao = '';

  while (opcao !== '0') {
    console.log('\n=== MENU DE CONVERSÕES ===');
    console.log('1 - Celsius para Fahrenheit');
    console.log('2 - Quilômetros para Milhas');
    console.log('3 - Quilos para Libras');
    console.log('0 - Sair');

    opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
      case '1': {
        const c = prompt('Informe a temperatura em Celsius: ');
        const f = Conversor.celsiusParaFahrenheit(c);
        console.log(`${c}°C = ${f.toFixed(2)}°F`);
        break;
      }
      case '2': {
        const km = prompt('Informe a distância em Km: ');
        const milhas = Conversor.quilometrosParaMilhas(km);
        console.log(`${km} Km = ${milhas.toFixed(2)} Milhas`);
        break;
      }
      case '3': {
        const kg = prompt('Informe o peso em Kg: ');
        const libras = Conversor.quilosParaLibras(kg);
        console.log(`${kg} Kg = ${libras.toFixed(2)} Libras`);
        break;
      }
      case '0':
        console.log('Saindo do programa...');
        break;
      default:
        console.log('Opção inválida! Tente novamente.');
    }
  }
}

main();