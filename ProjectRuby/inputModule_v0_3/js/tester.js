/* guide: https://jasmine.github.io/2.5/introduction */

/* specify the tests here, functions are pulled from the code.js as both files are linled in the "myTests.html" which then runs*/


describe("Testing code.js", function () {


    describe("Key class constructor", function () {

        it("Key class constructor, zero param", function () {
            expect(new Key().code).toBeUndefined();
            expect(new Key().value).toBeUndefined();
            expect(new Key().start).toBeUndefined();
            expect(new Key().finish).toBeUndefined();
            expect(new Key().duration).toBeUndefined();
            expect(new Key().isLongPressed).toBeUndefined();
        });

        testKey = new Key('a',"b","c");

        it("Key class constructor, normal params", function () {
            expect(testKey.code).toEqual("a");
            expect(testKey.value).toEqual("b");
            expect(testKey.start).toEqual("c");
            expect(testKey.finish).toBeUndefined();
            expect(testKey.duration).toBeUndefined();
            expect(testKey.isLongPressed).toBeUndefined();
        });

    });

    describe("Key class calcDuration function", function () {

        it("If a parameter(s) missing", function () {

            testKey2 = new Key();
            expect(function () { testKey2.calcDuration() }).toThrowError(FatalError);

            testKey4 = new Key();
            testKey4.start = 10;
            expect(function () { testKey4.calcDuration() }).toThrowError(FatalError);

            testKey5 = new Key();
            testKey5.finish = 10;
            expect(function () { testKey5.calcDuration() }).toThrowError(FatalError);

        });


        it("If a invalid parameters given", function () {

            testKey7 = new Key();


            testKey7.start = 0;
            testKey7.finish = 0;
            expect(function () { testKey7.calcDuration() }).toThrowError(FatalError);

            testKey7.start = 10;
            testKey7.finish = 0;
            expect(function () { testKey7.calcDuration() }).toThrowError(FatalError);

            testKey7.start = 0;
            testKey7.finish = -1;
            expect(function () { testKey7.calcDuration() }).toThrowError(FatalError);

        });


        it("If a valid parameters given", function () {

            testKey10 = new Key();
            testKey10.start = 100;
            testKey10.finish = 200;

            expect(function () { testKey10.calcDuration() }).not.toThrowError(FatalError);

            testKey10.calcDuration();
            expect(testKey10.duration).toEqual(100);
        });


    });









    describe("findKey(code)function", function ()
    {

        it("If no param supplied", function () {
            expect(function () { findKey() }).toThrowError();
        });

        it("If no sourceArray supplied", function () {
            expect(function () { findKey(10) }).toThrowError();
        });


        var activeKeys =
        [
            new Key(45, 45, 45),
            new Key(60, 60, 60),
            new Key(80, 80, 80)
        ];

        it("If no code supplied", function () {
            expect(function (activeKeys) { findKey(activeKeys) }).toThrowError();
        });


        it("If invalid code supplied", function () {
            expect(function () { findKey(activeKeys,"") }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,'') }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,"a") }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,'a') }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,undefined) }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,-1) }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,0) }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,true) }).toThrowError(FatalError);
            expect(function () { findKey(activeKeys,false) }).toThrowError(FatalError);
        });



        it("If no result found", function () {
            expect(function () { findKey(activeKeys,10) }).toThrowError(FatalError);
        });

        it("If result found", function () {
            expect(function () { findKey(activeKeys, 80) }).not.toThrow();
            expect(findKey(activeKeys, 80)).toEqual(activeKeys[2]);
        });


    });


});


