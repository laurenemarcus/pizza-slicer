var Pizza = {
  pie: 0,
  slice: function() {
    if ((4 <= this.size) && (this.size < 8)) {
      this.pie += 4;
    }
    return this.pie;
  }
};
