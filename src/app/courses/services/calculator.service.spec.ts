import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

//Note: Jasmine function, all the notes are made for future purposes
describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log("Calling beforeEach");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    //inline function, test suite
    console.log("add test");

    pending();

    const result = calculator.add(2, 2);

    expect(result).toBe(4); //test assertion, make sure that the test fails if the results is not four.

    expect(loggerSpy.log).toHaveBeenCalledTimes(1); //only once.
  });

  it("should subtract two numbers", () => {
    //for substraction testing
    console.log("subtract test");

    pending();

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result"); //test assertion

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
