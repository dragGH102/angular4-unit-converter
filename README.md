# WHAT THIS IS
A simple `Unit converter` in Angular 4

- tests
- 
- easy to extend

# RUN THE APP
`yarn && ng serve`

# RUN THE TESTS
`ng test`

# NOTES:
- project generate using `angular-cli` and **typescript** used for type check and inference
- **convert unit library** implement as **angular service** (`src/app/unit-converter/unit-converter.service.ts`)
- template-driven **form validation**
- **tests** defined for the service (`src/app/unit-converter/unit-converter.service.spec.ts`) and ran by karma+jasmine
- **extend** unit support by adding units to `src/app/unit-converter/units.ts`