const schoolTokenPayload = (school) => {
  return {
    school_name: school.school_name,
    school_id: school._id,
    ownership: school.ownership,
  };
};
const userTokenPayload = (user) => {
  return { username: user.username, userId: user._id, role: user.role };
};

module.exports = { schoolTokenPayload, userTokenPayload };
