const getTypeOptions = () => {
    const typeOptions = [
        {id: "0", name: "All", value: "all"},
        {id: "1", name: "Action", value: "action"},
        {id: "2", name: "Arms", value: "arms"},
        {id: "3", name: "Arrow", value: "arrow"},
        {id: "4", name: "Attack", value: "attack"},
        {id: "5", name: "Attack Reaction", value: "attackReaction"},
        {id: "6", name: "Aura", value: "aura"},
        {id: "7", name: "Bow", value: "bow"},
        {id: "8", name: "Chest", value: "chest"},
        {id: "9", name: "Club", value: "club"},
        {id: "10", name: "Dagger", value: "dagger"},
        {id: "11", name: "Defense", value: "defense"},
        {id: "12", name: "Defense Reaction", value: "defenseReaction"},
        {id: "13", name: "Equipment", value: "equipment"},
        {id: "14", name: "Gem", value: "gem"},
        {id: "15", name: "Generic", value: "generic"},
        {id: "16", name: "Hammer", value: "hammer"},
        {id: "17", name: "Head", value: "head"},
        {id: "18", name: "Hero", value: "hero"},
        {id: "19", name: "Instant", value: "instant"},
        {id: "20", name: "Item", value: "item"},
        {id: "21", name: "Legs", value: "legs"},
        {id: "22", name: "Pistol", value: "pistol"},
        {id: "23", name: "Ranger", value: "ranger"},
        {id: "24", name: "Reaction", value: "reaction"},
        {id: "25", name: "Resource", value: "resource"},
        {id: "26", name: "Staff", value: "staff"},
        {id: "27", name: "Sword", value: "sword"},
        {id: "28", name: "Token", value: "token"},
        {id: "29", name: "Weapon", value: "weapon"},
        {id: "30", name: "Young", value: "young"},
    ]

    return { typeOptions }
}

export const getTypeByName = (inputType) => {
    return getTypeOptions().typeOptions.filter(type => type.value === inputType.toLowerCase())[0]
}

export default getTypeOptions
