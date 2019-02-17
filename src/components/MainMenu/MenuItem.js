class MenuItem {
  constructor(id, heading, children = [], color = "#666666") {
    this.id = id;
    this.heading = heading;
    this.children = children;
    this.color = color;
  }
}

export default MenuItem;
