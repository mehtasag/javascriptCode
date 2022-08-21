const data = [
  {
    id: "1",
    data: "US edition",
  },
  {
    id: "1",
    data: "UK edition",
  },
  {
    id: "3",
    data: "CAN edition",
  },
];

const data2 = [
  {
    id: "921abd13-fe5f-4058-9762-8bfe2343018f",
    postID: "2da35bb9-646f-4c33-b3cf-666d5e91f63f",
    userId: "bf1bafc6-57e1-49eb-bf16-5711b82684a2",
  },
  {
    id: "0878fa91-40a5-4dbf-9e63-9ae2421da779",
    postID: "6423344e-d521-42d7-b1b6-2b149cd66617",
    userId: "bf1bafc6-57e1-49eb-bf16-5711b82684a2",
  },
  {
    id: "8dfb1295-edba-4b01-98fb-6a63ab1fb981",
    postID: "6423344e-d521-42d7-b1b6-2b149cd66617",
    userId: "bf1bafc6-57e1-49eb-bf16-5711b82684a2",
  },
  {
    id: "4ea7d429-a701-440a-9aaf-143b9c1c3647",
    postID: "651f5a4a-f450-42a4-8f98-d696a09a5156",
    userId: "bf1bafc6-57e1-49eb-bf16-5711b82684a2",
  },
];

const newData = [...new Set(data2.map((d) => d.postID))].map((id) => {
  return {
    id,
    likes: data2.filter((d) => d.postID === id).map((d) => d.postID),
  };
});

console.log(newData);
