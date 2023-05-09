
import {Card} from "../Models/Card";

type RangeStd = {
  min: number,
  max: number
}

type UnitBasicStd = {
  health: RangeStd,
  agility: RangeStd,
  stamina: RangeStd,
  initiative: RangeStd,
}

type UnitSkillsStd = {
  attack: RangeStd,
  defence: RangeStd,
}

type UnitStd = {
  basic: UnitBasicStd,
  skills: UnitSkillsStd
}

type WeaponTypeStd = {
  name: string,
  damage: RangeStd,
  durability: RangeStd,
  destruction: RangeStd,
}

type ArmourTypeStd = {
  name: string,
  durability: RangeStd,
  resist: RangeStd,
  destruction: RangeStd,
}

type WeaponQualityStd = {
  name: string,
  damageMD: RangeStd,
  durabilityMD: RangeStd,
  destructionMD: RangeStd,
}

type ArmourQualityStd = {
  name: string,
  durabilityMD: RangeStd,
  resistMD: RangeStd,
  destructionMD: RangeStd,
}

type WeaponStd = {
  types: WeaponTypeStd[],
  qualities: WeaponQualityStd[],
}

type ArmourStd = {
  parts: {
    head: ArmourTypeStd[],
    body: ArmourTypeStd[],
    legs: ArmourTypeStd[],
  },
  qualities: ArmourQualityStd[],
}

type FactoryStandards = {
  unit: UnitStd
  weapon: WeaponStd,
  armour: ArmourStd,
  card: {
    position: CardStd[],
    attack: CardStd[],
    defence: CardStd[]
  }
}

type CardStd = {
  name: string
  description: string
  actionGrid: ActionGridStd
  positionGrid: ActionGridStd
  rules: []
}

type ActionGridStd = [
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
    [number, number, number, number, number],
]

const factoryStandards: FactoryStandards = {
  unit: {
    basic: {
      health: {
        min: 1000,
        max: 1000
      },
      agility: {
        min: 30,
        max: 45
      },
      stamina: {
        min: 90,
        max: 110
      },
      initiative: {
        min: 300,
        max: 450
      }
    },
    skills: {
      attack: {
        min: 10,
        max: 15,
      },
      defence: {
        min: 10,
        max: 20,
      }
    }
  },
  weapon: {
    types: [
      {
        name: 'knife',
        damage: {
          min: 10,
          max: 15
        },
        durability: {
          min: 150,
          max: 200
        },
        destruction: {
          min: 25,
          max: 30
        },
      },
      {
        name: 'cleaver',
        damage: {
          min: 25,
          max: 35
        },
        durability: {
          min: 250,
          max: 350
        },
        destruction: {
          min: 10,
          max: 15
        },
      },
      {
        name: 'hammer',
        damage: {
          min: 25,
          max: 30
        },
        durability: {
          min: 300,
          max: 450
        },
        destruction: {
          min: 5,
          max: 10
        },
      }
    ],
    qualities: [
      {
        name: 'bad',
        damageMD: {
          min: 0.8,
          max: 0.9
        },
        durabilityMD: {
          min: 0.8,
          max: 0.9
        },
        destructionMD: {
          min: 1.1,
          max: 1.2
        }
      },
      {
        name: 'normal',
        damageMD: {
          min: 0.9,
          max: 1.1
        },
        durabilityMD: {
          min: 0.9,
          max: 1.1
        },
        destructionMD: {
          min: 0.9,
          max: 1.1
        }
      },
      {
        name: 'good',
        damageMD: {
          min: 1.1,
          max: 1.2
        },
        durabilityMD: {
          min: 1.1,
          max: 1.2
        },
        destructionMD: {
          min: 0.8,
          max: 0.9
        }
      },
    ]
  },
  armour: {
    parts: {
      head: [
  {
    name: 'bandana',
    durability: {
      min: 150,
      max: 200
    },
    resist: {
      min: 1,
      max: 1.1
    },
    destruction: {
      min: 20,
      max: 35
    },
  },
  {
    name: 'helmet',
    durability: {
      min: 450,
      max: 550
    },
    resist: {
      min: 1.3,
      max: 1.5
    },
    destruction: {
      min: 10,
      max: 15
    },
  },
  {
    name: 'mask',
    durability: {
      min: 50,
      max: 150
    },
    resist: {
      min: 1.2,
      max: 1.3
    },
    destruction: {
      min: 25,
      max: 30
    },
  }
],
      body: [
  {
    name: 'coat',
    durability: {
      min: 400,
      max: 500
    },
    resist: {
      min: 1.4,
      max: 1.6
    },
    destruction: {
      min: 15,
      max: 25
    },
  },
  {
    name: 'sweeter',
    durability: {
      min: 350,
      max: 400
    },
    resist: {
      min: 1.3,
      max: 1.4
    },
    destruction: {
      min: 20,
      max: 30
    },
  },
  {
    name: 'shirt',
    durability: {
      min: 250,
      max: 300
    },
    resist: {
      min: 1.1,
      max: 1.2
    },
    destruction: {
      min: 25,
      max: 30
    },
  }
],
      legs: [
  {
    name: 'pents',
    durability: {
      min: 150,
      max: 200
    },
    resist: {
      min: 1.3,
      max: 1.4
    },
    destruction: {
      min: 25,
      max: 30
    },
  },
  {
    name: 'shorts',
    durability: {
      min: 250,
      max: 350
    },
    resist: {
      min: 1.1,
      max: 1.2
    },
    destruction: {
      min: 25,
      max: 30
    },
  },
  {
    name: 'kilt',
    durability: {
      min: 300,
      max: 450
    },
    resist: {
      min: 1.1,
      max: 1.3
    },
    destruction: {
      min: 15,
      max: 20
    },
  }
],
    },
    qualities: [
      {
        name: 'bad',
        durabilityMD: {
          min: 0.8,
          max: 0.9
        },
        resistMD: {
          min: 0.05,
          max: 0.1
        },
        destructionMD: {
          min: 1.1,
          max: 1.2
        }
      },
      {
        name: 'normal',
        durabilityMD: {
          min: 0.9,
          max: 1.1
        },
        resistMD: {
          min: 0.1,
          max: 0.15
        },
        destructionMD: {
          min: 0.9,
          max: 1.1
        }
      },
      {
        name: 'good',
        durabilityMD: {
          min: 1.1,
          max: 1.2
        },
        resistMD: {
          min: 0.15,
          max: 0.25
        },
        destructionMD: {
          min: 0.8,
          max: 0.9
        }
      },
    ]
  },
  card: {
    position: [
      {
        name: 'Standing',
        description: 'regular standing, ready for action',
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        rules: []
      },
      {
        name: 'Dodge down',
        description: 'dodging down',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Right dodge',
        description: 'right dodging',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 3, 0, 0],
          [0, 2, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
    ],
    attack: [
      {
        name: 'Light left angle swipe',
        description: 'regular angle swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Hard middle left angle swipe',
        description: 'hard middle angle swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 2, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Hard middle swipe',
        description: 'hard middle swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 2, 0, 0],
          [0, 0, 2, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Hard middle swipe',
        description: 'hard middle swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 2, 0, 0],
          [0, 0, 2, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Bottom horizontal swipe',
        description: 'bottom horizontal swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Left vertical  swipe',
        description: 'left vertical swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Horizontal light head swipe',
        description: 'regular angle swipe',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Middle pointing',
        description: 'middle pointing',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 3, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Head pointing',
        description: 'head pointing',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 3, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Stomach pointing',
        description: 'stomach pointing',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 3, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
    ],
    defence: [
      {
        name: 'Up shield defence',
        description: 'up shield defence',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Middle shield defence',
        description: 'middle shield defence',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Vertical up melee defence',
        description: 'vertical up melee defence',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
      {
        name: 'Angle up melee defence',
        description: 'Angle up melee defence',
        actionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        positionGrid: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 2, 3, 4, 0],
          [0, 0, 5, 0, 0],
          [0, 6, 0, 8, 0],
        ],
        rules: []
      },
    ]
  }
}

export {
 factoryStandards,
  UnitStd,
  UnitSkillsStd,
  UnitBasicStd,
  RangeStd,
  WeaponStd,
  ArmourStd,
  CardStd,
  ActionGridStd
};