# CSVReader

## Description
  CSVReader is used to parse data that is in the form of CSV in javascript. This module is made with the inspiration of python's
  csv reader. CSVReader is a class in the CSVReader.js file. A simple import statement should allow you to retrieve the required class.  
  Ex. ``` import { CSVReader } from './CSVReader.js'; ```
  In order to create a CSVReader object you must create a new object instance.  
  Ex. ``` var myReader = new CSVReader("./testing.csv"); ```  
  The arguments passed into CSVReader should be a file name in string format. The headers parameter is under construction and has no implementation yet. There are no method calls to be made. MyReader should contain a 2D array with the data under the assumption the file you are trying to get exists and is accessible.
