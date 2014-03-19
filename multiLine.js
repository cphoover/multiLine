function multiLine(a){a=/function.*\(\)\w*{.*\/\*\!?([\w\s]*)(?=\*\/)/.exec(a.toString());return null===a?!1:a[1]};
