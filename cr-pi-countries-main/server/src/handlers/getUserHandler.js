//get
const getUserHandler =  async (req, res) => {
    const allActivities = await Activity.findAll({ include: Country })
    //filtro para el front que trae todas las actividades
    const filterA = allActivities.map(e => e.name.toLowerCase())
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    return res.json(total)
};

//post

const postUserHandler = async (req, res, next) => {

    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        await activity.setCountries(countries)

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
       return res.json(activityWithCountry)
    } catch (error) {
        next(error)
    }

};

module.exports = {
    getUserHandler,
    postUserHandler
}