if (require.main === module) {
 let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 5, "mobile");
 console.log(result);
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(1));
}