import { BiWifi, BiWater, BiBath, BiCoffee, BiTimeFive } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

const hotelDescription = {
  title: `Pousada Na Tribu's`,
  description: 'Próximo aos setores de entretenimento e empresarial, o Plaza Bittar Hotel fica a 1 quarteirão do Shopping Brasília e a 15 minutos de carro do Aeroporto Internacional de Brasília. Os quartos dispõem de ar-condicionado, e o Wi-Fi...',
  commodities: [
    { 
      id: uuidv4(), 
      Icon: BiWifi,
      name: 'Wi-Fi gratuito',
    },
    {
      id: uuidv4(), 
      Icon: BiCoffee,
      name: 'Restaurante',
    },
    {
      id: uuidv4(), 
      Icon: BiTimeFive,
      name: 'Recepção 24h',
    },
    {
      id: uuidv4(), 
      Icon: BiBath,
      name: 'Toalha de banho',
    },
    {
      id: uuidv4(), 
      Icon: BiWater,
      name: 'Piscina',
    },
  ]
}

export { hotelDescription };