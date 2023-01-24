
interface ObjectC {
    etat : boolean
    name : string
}

interface ObjetCadmin extends ObjectC{
    
}

interface User {
    name : string
}

interface piece {
    name: string
    objets: ObjectC[]
    users: User[]
}

//backend : Hasura