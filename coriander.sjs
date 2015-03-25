macro @ {
	rule { .$method($args...) } => {
        // lots of failed attempts to abstract these two rules
        //var y = makeValue(42, #{$method});
        //return [y];
        //return #{$method($args...)}
        //var a = #{@.hi}
        //return [makeDelim("{}", [makeValue(42, null)], null) 
        //var a = #{$method($args...)}
        //var b = #{@.$method}
        //var c = localExpand(#{@.$method})
        //return [y, makeDelim("()", a, null)]
        //return #{@.hi}
        //return [makeValue(b, null)]
        //return [y, makeDelim("()", #{$args...}, null)]
		(function(x) { 
			return x.$method($args...)
		})
	}
	rule { .$prop } => {
		(function(x) { 
			return x.$prop
		})
	}
}

// partially apply 'this' with instance property
var getLength = @.length;
console.log(['a','bb','ccc'].map(getLength)); // [1, 2, 3]

// method
var makeUpper = @.toUpperCase();
console.log(['a','b','c'].map(makeUpper)); // ['A','B','C']

// hygienic
//@.foo('a', @.bar('b')); 

//'test'.replace('a', *)