const raritiesImages = () => {

    const getRarityImageByInput = (rarity) => {
        switch (rarity) {
            case "T":
                return getTokenImage()
            case "C":
                return getCommonImage()
            case "R":
                return getRareImage()
            case "S":
                return getSuperRareImage()
            case "M":
                return getMajesticImage()
            case "L":
                return getLegendaryImage()
            case "F":
                return getFableImage()
        }
    }

    const getTokenImage = () => {
        return require(`@/assets/imgs/icons/rarities/token2.png`)
    }
    const getCommonImage = () => {
        return require(`@/assets/imgs/icons/rarities/common2.png`)
    }
    const getRareImage = () => {
        return require(`@/assets/imgs/icons/rarities/rare2.png`)
    }
    const getSuperRareImage = () => {
        return require(`@/assets/imgs/icons/rarities/super-rare2.png`)
    }
    const getMajesticImage = () => {
        return require(`@/assets/imgs/icons/rarities/majestic2.png`)
    }
    const getLegendaryImage = () => {
        return require(`@/assets/imgs/icons/rarities/legendary2.png`)
    }
    const getFableImage = () => {
        return require(`@/assets/imgs/icons/rarities/fable2.png`)
    }

    return {
        getRarityImageByInput,
    }
}

export default raritiesImages
