multiLine
=========

example usage:

    (function(){/*!
    
    <div>
      <span>test test</span>
    </div>

    */}).multiLine();


returns:

    "
    <div>
      <span>test test</span>
    </div>

    "

Note
=========
the /*! docblock is preserved in yuicompressor and yuglify.js

To DO
=========
* Provide Template Support via underscore.js
* Create build task to convert
