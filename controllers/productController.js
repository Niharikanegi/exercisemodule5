const items = (req, res) => {
    res.status(200)
    res.json({
        category: req.params['category'],
        brand: req.params['brand'],
        name: req.params['name']
    })

}



module.exports = {
    items
}