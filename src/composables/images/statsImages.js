const statsImages = () => {
    const getResourcesImageByInput = (resource) => {
        switch (resource) {
            case "1":
                return getPitch1Image()
            case "2":
                return getPitch2Image()
            case "3":
                return getPitch3Image()
        }
    }

    const getAttackImage = () => {
        return require(`@/assets/imgs/icons/stats/attack.png`)
    }
    const getCostImage = () => {
        return require(`@/assets/imgs/icons/stats/cost.png`)
    }
    const getDefenseImage = () => {
        return require(`@/assets/imgs/icons/stats/defense.png`)
    }
    const getIntellectImage = () => {
        return require(`@/assets/imgs/icons/stats/intellect.png`)
    }
    const getLifeImage = () => {
        return require(`@/assets/imgs/icons/stats/life.png`)
    }
    const getPitch1Image = () => {
        return require(`@/assets/imgs/icons/stats/pitch-1.png`)
    }
    const getPitch2Image = () => {
        return require(`@/assets/imgs/icons/stats/pitch-2.png`)
    }
    const getPitch3Image = () => {
        return require(`@/assets/imgs/icons/stats/pitch-3.png`)
    }

    return {
        getResourcesImageByInput,
        getAttackImage,
        getCostImage,
        getDefenseImage,
        getIntellectImage,
        getLifeImage
    }
}

export default statsImages
