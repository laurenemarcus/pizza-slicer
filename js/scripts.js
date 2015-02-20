var Pizza = {
  pie: 0,
  slice: function() {
    if ((4 <= this.size) && (this.size < 8)) {
      this.pie += 4;
    } else if ((8 <= this.size) && (this.size < 12)) {
      this.pie += 6;
    } else if ((12 <= this.size) && (this.size < 16)) {
      this.pie += 8;
    }
    return this.pie;
  }
};
