import { Atraining } from "../assets/icons/A-training"
import { Ctraining } from "../assets/icons/C-training"
import { Dtraining } from "../assets/icons/D-training"
import { Etraining } from "../assets/icons/E-training"
import { BS1training } from "../assets/icons/BS1-training"
import { BS2training } from "../assets/icons/BS2-training"
import { BS3training } from "../assets/icons/BS3-training"

type WeekDaysKeys = 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab' | 'dom';

export const trainingDivision = [
  {
    id: 1,
    acronym: 'A',
    name: 'Membros infgeriores (foco em quadríceps)',
    icon: Atraining,
  },
  {
    id: 2,
    acronym: 'BS1',
    name: 'Membros superiores (ombro, peito, tríceps + abs/cardio)',
    icon: BS1training,
  },
  {
    id: 3,
    acronym: 'BS2',
    name: 'Membros superiores (costa, bíceps +abs/cardio)',
    icon: BS2training,
  },
  {
    id: 4,
    acronym: 'BS3',
    name: 'Superiores completo + abs e cardio',
    icon: BS3training,
  },
  {
    id: 5,
    acronym: 'C',
    name: 'Membros inferiores (posterior e glúteo);',
    icon: Ctraining,
  },
  {
    id: 6,
    acronym: 'D',
    name: 'Inferiores Completo (quadríceps, posterior e glúteo)',
    icon: Dtraining,
  },
  {
    id: 7,
    acronym: 'E',
    name: 'Alongamento/yoga/meditação/dança ou off total',
    icon: Etraining,
  },
]

export const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'] as WeekDaysKeys[]

export const trainingWeeks = [
  {
    id: 1,
    training_days: 3,
    week_days: [
      [{icon: Dtraining}, {icon: Atraining}],
      ['Sem treino'],
      [{icon: BS3training}],
      ['Sem treino'],
      [{icon: Dtraining}, {icon: Ctraining}],
      ['Sem treino'],
      ['Sem treino'],
    ],
    observations: {
      first: '• nos dias de membros inferiores, você tem a opção de fazer o treino D (recomendo), mas se não quiser e quiser dividir os membros, pode fazer A na segunda e C na sexta!',
      second: '• caso seu foco seja 100% quadríceps, pode fazer o A na segunda e sexta!',
      third: '• caso seu foco seja 100% glúteo e posterior, pode fazer o C na segunda e sexta',
      forth: '• sugestão 2: uma semana fazer o A segunda e sexta e na outra semana fazer o C na segunda e sexta',
      fifth: '• Está com pouco tempo? Use as fichas reduzidas'
    }
  },
  {
    id: 2,
    training_days: '4',
    week_days: [
      [{icon: Atraining}],
      [{icon: BS3training}],
      [{icon: Ctraining}],
      ['Sem treino'],
      [{icon: Dtraining}],
      ['Sem treino'],
      ['Sem treino'],
    ],
    observations: {
      first: '• se seu foco for mais quadríceps, faça o A na segunda e sexta e o D na quarta',
      second: '• se seu foco for mais glúteo, faça o C na segunda e sexta e o D na quarta',
      third: '• Se seu foco for mais membros superiores do que inferiores, na sexta você pode repetir o B3 ao invés de fazer a ficha D',
      forth: '• Está com pouco tempo? Use as fichas reduzidas',
      fifth: ''
    }
  },
  {
    id: 3,
    training_days: '5',
    week_days: [
      [{icon: Atraining}],
      [{icon: BS1training}],
      [{icon: Ctraining}],
      [{icon: BS2training}],
      [{icon: Dtraining}],
      ['Sem treino'],
      ['Sem treino'],
    ],
    observations: {
      first: '• se seu foco for mais quadríceps, faça o A na segunda e sexta e o D na quarta',
      second: '• se seu foco for mais glúteo, faça o C na segunda e sexta e o D na quarta',
      third: '• Está com pouco tempo? Use as fichas reduzidas',
      forth: '',
      fifth: ''
    }
  },
  {
    id: 4,
    training_days: '6',
    week_days: [
      [{icon: Atraining}],
      [{icon: BS1training}],
      [{icon: Ctraining}],
      [{icon: BS2training}],
      [{icon: Dtraining}],
      [{icon: BS3training}],
      ['Sem treino'],
    ],
    observations: {
      first: '• se seu foco for mais quadríceps, faça o A na segunda e sexta e o D na quarta',
      second: '• se seu foco for mais glúteo, faça o C na segunda e sexta e o D na quarta',
      third: '• Está com pouco tempo? Use as fichas reduzidas',
      forth: '',
      fifth: ''
    }
  }
]