/**
 * The maximum allowed overlap between consecutive cues before they are considered to occur on different days.
 * If the overlap exceeds this tolerance, the next cue is treated as starting on the following day.
 */
export const CUE_OVERLAP_TOLERANCE = 60 * 60000 // 60 min
