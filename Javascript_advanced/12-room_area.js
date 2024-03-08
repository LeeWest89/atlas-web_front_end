// Create an object that calculates the surface area, then created a variable that binds roomDimensions to getArea

const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return (this.width * this.length);
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);