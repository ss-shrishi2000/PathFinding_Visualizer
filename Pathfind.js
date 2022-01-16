import React, {useState, useEffect} from "react";
import Node from './Node';
import "./Pathfind.css";


const rows = 5;
const cols = 5;

// a grid of nodes rendered on the screen
//useEffect function runs before anything is rendered onto the DOM

const Pathfind = () => {
  const [Grid, setGrid] = useState([]);

  useEffect( () =>{
      initializeGrid();
  }, []);

  //creation of our grid internally thereby, rendering it onto the screen
  //use of Array constructor to create the array

  //useEffect here works almost similar to componentDidMount

   
  const initializeGrid = () => {

      const grid = new Array(cols);
      for(let i=0; i<cols; i++)
      {
        grid[i] = new Array(rows);
      }

      createSpot(grid);

      setGrid(grid);

    };

    //Creates the SPOT
    const createSpot = (grid) =>{

    for(let i=0;i<cols; i++)
      {
          for(let j=0; j<rows; j++)
          {
              grid[i][j] = new Spot(i,j);
          }
      }
    };

    //creation of the SPOT constructor for the implementation of A star algorithm.

    function Spot(i,j)
    {
        this.x = i;
        this.y = j;
        this.g = 0;
        this.f = 0;
        this.h = 0;
    }

    //JSX used for creating a Grid with nodes

    const gridwithNode = () => (
        <div>
            {Grid.map((row, rowIndex) => {
                return (
                    <div key = {rowIndex} className="rowWrapper">
                    {row.map((col,colIndex) => {
                        return <Node key = {colIndex} />;
                    })}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="Wrapper">
            {gridwithNode}
        </div>
    );
};

export default Pathfind;
