module.exports = {
  // get all user
  index (req, res) {    
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')    
  },

  // create user
  create (req, res) {
    res.send('สร้างผู้ใช้')
  },

  // edit user, suspend, active
  put (req, res) {
    res.send('แก้ไขผู้ใช้')
  },

  // delete user
  remove (req, res) {
    res.send('ลบผู้ใช้งาน')
  },

  // get user by id
  show (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
  }
}