var Pizza = {
  pie: 0,
  slice: function() {
    if ((4 <= this.size) && (this.size < 8)) {
      this.pie += 4;
    }
    if ((8 <= this.size) && (this.size < 12)) {
      this.pie += 6;
    }
    return this.pie;
  }
};
