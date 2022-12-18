{
    type animalSound = {
        breeds: string,
        sound: string,
    }

    interface AnimalSoundMaker {
        makeSounds(breeds: string): animalSound;
    }

    class Animal implements AnimalSoundMaker {
        protected breeds: string = '';
        private constructor(breeds: string) {
            this.breeds = breeds;
        }
        makeSounds(breeds: string): { breeds: string; sound: string; } {
            throw new Error("Method not implemented.");
        }

        static makeSounds(breeds: string): animalSound {
            let sound = '';
            switch (breeds) {
                case 'dog':
                    sound = 'bark bark';
                    break;
                case 'cat':
                    sound = 'meow meow';
                    break;
                case 'pig':
                    sound = 'oink oink'
                    break;
                default: throw new Error('value is incorrect');
            }
            return {
                breeds,
                sound
            }
        }
    }

    const animal1 = Animal.makeSounds('dog');
    console.log(animal1);
    const animal2 = Animal.makeSounds('cat');
    console.log(animal2);
    const animal3 = Animal.makeSounds('pig');
    console.log(animal3);
}
