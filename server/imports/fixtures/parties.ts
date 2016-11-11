import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties(){
    if( Parties.find().cursor.count() === 0 ){
        const parties: Party[] = [
            {
                name: 'Fiesta de carga inicial 1',
                description: 'Descripcion de carga inicial 1',
                location: 'ubicacion de carga inicial 1',
                public: true
            },
            {
                name: 'Fiesta de carga inicial 2',
                description: 'Descripcion de carga inicial 2',
                location: 'ubicacion de carga inicial 2',
                public: true
            },
            {
                name: 'Fiesta de carga inicial 3',
                description: 'Descripcion de carga inicial 3',
                location: 'ubicacion de carga inicial 3',
                public: false
            }
        ];

        parties.forEach((party: Party) => Parties.insert(party));
    }
}