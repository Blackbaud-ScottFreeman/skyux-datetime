import {
  SkyDateRangeCalculatorId
} from './date-range-calculator-id';

import {
  SkyDateRange
} from './date-range';

export interface SkyDateRangeCalculation extends SkyDateRange {

  /**
   * Specifies the calculator that determines the dates in the date range.
   */
  calculatorId: SkyDateRangeCalculatorId;

}
