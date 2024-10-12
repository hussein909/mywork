function howILikeToEat(items) {

    if(items.length === 0) {
    
    console.log("I have no food preferences.");
    
    return; 
    
    }
    
    let foodString = items.join(' ,');
    
    if (items.includes('apples') || items.includes('mango')) {
    
    console.log(`${foodString} I only eat that in summer. `);
    
    }else if (items.includes('fish') || items.includes('meat') || items.includes('tofu')) {
    
    console.log(`${foodString} I only eat that once a week. `)
    
    } else if (items.includes('computer')) {
    
    console.log(`${foodString} I do not eat.`)
    
        } 
    
    }

    
    function howILikeToEat(items) {
    
    if( items.length === 0) {
    
    console.log("I have no food  preferences.");
    
    return ; 
    
    }
    
    let foodString = items.join(',');
    
    if (items.includes('watermelon') || items.includes('ice cream')) {
    
    console.log(`${foodString} I only eat that in summer`);
    
    } else if (items.includes('spinach') || items.includes('fish') || items.includes('chicken')) {
    
    console.log(`${foodString} I only eat that once a week.`);
    
    } else if (items.includes('hoover')) {
    
    console.log(`${foodString} I do not eat.`)
    
        }  
    
    }