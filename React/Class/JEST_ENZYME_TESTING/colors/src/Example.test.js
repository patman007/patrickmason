test("testing 2+2", () => {
  expect(2 + 2).toBe(4);
});

test("testing 2+2", () => {
  expect(2 + 2).not.toBe(5);
});

test("lacroix test for grapefruit", () => {
  function bestLaCroixFlavor() {
    return "grapefruit";
  }
  expect(bestLaCroixFlavor()).toBe("grapefruit");
});

describe("Testing Jack and Diane array", () => {
  const values = ["Jack", "Diane"];
  it("array1 will pass our containing test", () => {
    expect(["Jack", "Diane", "George"]).toEqual(expect.arrayContaining(values));
  });

  it("array2 will pass our containing test", () => {
    expect(["Jack"]).not.toEqual(expect.arrayContaining(values));
  });

  it("array3 will pass our containing test", () => {
    expect(["Bill"]).not.toEqual(expect.arrayContaining(values));
  });
});
