const db = require('../models');
const Checkup = db.checkup;

exports.updateCheckup = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Checkup.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedCheckup = await Checkup.findByPk(id);
      res.status(200).json(updatedCheckup);
    } else {
      res.status(404).json({ message: 'Checkup not found' });
    }
  } catch (error) {
    console.error('Update Checkup Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
