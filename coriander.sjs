macro @ {
	rule { .$x($args...) } => {
		(function(x) { 
			return x.$x($args...)
		})
	}
}

values.map(@.replace('and ', ''));

// hygeinic
@.foo('a', @.bar('b'));

//'test'.replace(@)