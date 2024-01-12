// Hasmap that overwrites on collision.
function hashMap() {
    let buckets = [];
    buckets.length = 8;
  
    const primeNumber = 17;
    let hashCode = 0;
    let modulus = 8;
  
    const hash = (string) => {
      for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
          hashCode = hashCode % modulus;
      }
      return hashCode;
    }
  
    const set = (key, value) => {
      // Use the following snippet whenever you access a bucket through an index. 
      // We want to throw an error if we try to access an out of bound index:
      if (key < 0 || key >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
      buckets[key] = value;
  
  //// If load factor >=0.75, extend buckets and increase hashcode modulus  
      currentLength = length();
      if (currentLength / buckets.length >= 0.75) {
          buckets.length = buckets.length * 2;
          modulus = modulus * 2;
      }
    }
      
    const get = (key) => {
      if (buckets[key] == undefined) {
          return null
      }
      return buckets[key];
    }
  
    const has = (key) => {
      if (buckets[key] != undefined) {
          return true;
      }
      return false;
    }
  
    const remove = (key) => {
      if (key < 0 || key >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
      buckets[key] = undefined;
    }
  
    const length = () => {
      let count = 0;
      for (let i = 0; i < buckets.length; i++) {
        if (has(i) == true) {
          count += 1;
        }
      }
      return count;
    }
  
    const clear = () => {
      for (let i = 0; i < buckets.length; i++) {
        buckets[i] = undefined;
      }
    }
  
    const keys = () => {
      let keysBucket = [];
      for (let i = 0; i < buckets.length; i++) {
        if (has(i) == true) {
          keysBucket.push(i);
        }
      }
      return keysBucket;
    }
    
    const values = () => {
      let valuesBucket = [];
      for (let i = 0; i < buckets.length; i++) {
        if (has(i) == true) {
          valuesBucket.push(buckets[i]);
        }
      }
      return valuesBucket;
    }
  
    const entries = () => {
      let entries = [];
      for (let i = 0; i < buckets.length; i++) {
          if (has(i) == true) {
            entries.push([i,buckets[i]]);
          }
        }
        return entries;
    }
  
    return {
      buckets,
      hash,
      set, 
      get,
      has,
      remove,
      length,
      clear,
      keys,
      values,
      entries
    }
  }
  
  
  