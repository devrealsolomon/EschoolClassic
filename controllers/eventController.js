const Event = require("../models/Event");
const CustomError = require("../errors");
const cloudinary = require("../services/cloudinary");
const createEvent = async (req, res) => {
  req.body.school = req.school.school_id;
  if (req.body.event_image) {
    const result = await cloudinary.uploader.upload(req.body.event_image, {
      folder: "School",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.event_image = image;
  }
  const event = await Event.create(req.body);
  res.status(200).json(event);
};
const updateEvent = async (req, res) => {
  if (req.body.event_image) {
    const result = await cloudinary.uploader.upload(req.body.event_image, {
      folder: "School",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.event_image = image;
  }
  const event = await Event.findByIdAndUpdate(req.params.event_id, req.body, {
    new: true,
  });
  res.status(200).json(event);
};
const deleteEvent = async (req, res) => {
  const eventToDelete = await Event.findById(req.params.event_id).populate(
    "school",
    { school_name: 1 }
  );
  if (!eventToDelete) {
    throw new CustomError.BadRequestError(
      `Note with id ${req.params.event_id} not found`
    );
  }
  authorizeUser(req.school, eventToDelete.school.school_name);
  await eventToDelete.remove();
  res.status(200).json("Event deleted successfully");
};
const getASchoolEvents = async (req, res) => {
  const page = req.query.page || 0;
  const allEvents = await Event.find({ school: req.params.school_id });
  const events = await Event.find({ school: req.params.school_id })
    .populate(["school"])
    .sort("-createdAt")
    .skip(Number(page) * 12)
    .limit(12);
  res.status(200).json({ count: allEvents.length, events });
};
const getCurrentSchoolEvents = async (req, res) => {
  const events = await Event.find({ school: req.school.school_id }).populate(
    "school"
  );
  res.status(200).json(events);
};
module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getASchoolEvents,
  getCurrentSchoolEvents,
};
