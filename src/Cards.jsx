import './App.css'
import Card from './Card'
import './card.css'
import React from 'react';

function Cards() {

  return (
    <div className="card-container">
    <Card image="images\array.png" description="Ordered collection of elements stored at contiguous memory locations" topic="ARRAYS" link="https://www.geeksforgeeks.org/complete-guide-to-arrays-data-structure/?ref=outind"/>
    <Card image="images\strings.png" description="Sequence of characters treated as a single data item" topic="STRINGS" link="https://www.geeksforgeeks.org/complete-guide-to-string-data-structure/?ref=outind"/>
    <Card image="images\stacks.png" description="Last-In-First-Out (LIFO) data structure for storing and retrieving elements" topic="STACKS" link="https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/?ref=outind"/>
    <Card image="images\queue.png" description="First-In-First-Out (FIFO) data structure for organizing elements" topic="QUEUES" link="https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/?ref=outind"/>
    <Card image="images\linked_list.png" description="Linear collection of elements where each element points to the next" topic="LINKED LISTS" link="https://www.geeksforgeeks.org/singly-linked-list-definition-meaning-dsa/?ref=outind"/>
    <Card image="images\recursion.jpeg" description=" Problem-solving method where a function calls itself to solve smaller instances" topic="RECURSION" link="https://www.geeksforgeeks.org/introduction-to-recursion-2/"/>
    <Card image="images\backtracking.jpeg" description="Algorithmic technique for solving problems by trying and undoing options" topic="BACKTRACKING" link="https://www.geeksforgeeks.org/introduction-to-backtracking-2/"/>
    <Card image="images\tree.png" description="Hierarchical data structure with a root node and child nodes" topic="TREES" link="https://www.geeksforgeeks.org/introduction-to-binary-tree/"/>
    <Card image="images\graph.png" description="Collection of vertices (nodes) connected by edges to represent relationships" topic="GRAPHS" link="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=outind"/>
    <Card image="images\greedy.jpeg" description=" Algorithmic paradigm that makes locally optimal choices at each step" topic="GREEDY" link="https://www.geeksforgeeks.org/introduction-to-greedy-algorithm-data-structures-and-algorithm-tutorials/?ref=outind"/>
    <Card image="images\dp.jpeg" description=" Method for solving complex problems by breaking them into simpler subproblems" topic="DYNAMIC PROGRAMMING" link="https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/?ref=outind"/>
    <Card image="images\bit_manipulation.png" description="Technique of manipulating individual bits in computer data" topic="BIT MANIPULATION" link="https://www.geeksforgeeks.org/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/?ref=outind" />
    </div>
  )
}

export default Cards
