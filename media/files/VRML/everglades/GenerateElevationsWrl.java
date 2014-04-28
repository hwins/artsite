/*
 * This is a program to generate an elevation wrl that will be used
 * in Module 3.  The output is a functional wrl file.
 */
package Module3;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import java.util.Random;

/**
 * run by passing 2 values, one for x dimension, one for z dimension.
 * creates a wrl file to be used in elevation node height parm for ground
 * to appear naturally randomly hilly
 * @author Howard Winston
 */
public class GenerateElevationsWrl {

    private static final String ELEVATIONS_OUT = "elevations.wrl";
    private static final String LINE_BREAK = "\n";
    private static final int MAX_ELEMENTS_PER_LINE = 10;
    private static int xDimension;
    private static int zDimension;
    // hold the values of y values
    private static double[][] matrixOfValues;
    // max height permitted
    private static final double MAX_Y_VALUE = 15.0;
    // percent of row and column vaules to generate
    private static final double ROW_PERCENT = 1.00;
    private static final double COL_PERCENT = 0.90;
    private static final DecimalFormat decFormat =
            new DecimalFormat("0.000");
    private static final int X_SPACING = 30;
    private static final int Z_SPACING = 30;
    private static final String CREASE_ANGLE = "3.14";
    private static final String INDENT_12 = "            ";

    /**
     * Must have 2 integer parms
     * @param x dimension
     * @param z dimension
     */
    public static void main(String[] args) throws IOException {

        // must have 2 args both numeric - for x and z dimensions
        if (args.length > 1) {
            try {
                xDimension = Integer.parseInt(args[0]);
            } catch (NumberFormatException e) {
                System.err.println("First argument must be an integer");
                System.exit(1);
            }
            try {
                zDimension = Integer.parseInt(args[1]);
            } catch (NumberFormatException e) {
                System.err.println("Second argument must be an integer");
                System.exit(1);
            }
        } else {
            System.err.println("Must have 2 integer args to represent x and z");
            System.exit(1);
        }

        // set up file to send formatted output to
        PrintWriter elevationFile =
                new PrintWriter(new FileWriter(ELEVATIONS_OUT));

        // load matrix with default values
        matrixOfValues = new double[xDimension][zDimension];
        for (int z = 0; z < zDimension; z++) {
            for (int x = 0; x < xDimension; x++) {
                matrixOfValues[x][z] = 0.000;
            }
        }

        // generate random values of data in matrix
        generateRandomValues();

        // print first part of wrl file
        elevationFile.print(printWrlFirst());

        // print results into height values
        elevationFile.print(printWrlHeightValues());

        // print closing scope
        elevationFile.print("        ]" + LINE_BREAK + "    }" +
                LINE_BREAK + "}");

        elevationFile.close();
    }

    /*
     * this will generate random height (y) values and populate the matrix.
     */
    private static void generateRandomValues() {
        Random random = new Random();
        int rowNumber;
        int colNumber;
        double y_value;
        double three_quarters_y_value;
        double half_y_value;
        double one_quarter_y_value;

        // generate roughly row percent of rows - potential to pick
        // the same number twice but that's ok
        int numberOfRowsToGenerate = (int) (zDimension * ROW_PERCENT);

        // roughly the percent of the columns to get random values
        int numberOfColumnsToPopulate = (int) (xDimension * COL_PERCENT);

        for (int i = 0; i < numberOfRowsToGenerate; i++) {

            // row must not be within 5 positions to the edge
            rowNumber = random.nextInt(zDimension - 9) + 5;
            System.out.println(rowNumber);

            // now pick random points on this row to populate with
            // height (y) values
            for (int j = 0; j < numberOfColumnsToPopulate; j++) {

                // column must not be within 5 positions to the edge
                colNumber = random.nextInt(xDimension - 9) + 5;

                y_value = (random.nextDouble() * MAX_Y_VALUE);

                System.out.print(colNumber + " = "
                        + decFormat.format(y_value) + " ");

                matrixOfValues[rowNumber][colNumber] = y_value;


                // now adjust the neighbors heights to avoid sharpness
                three_quarters_y_value = y_value * 0.75;
                half_y_value = y_value * 0.50;
                one_quarter_y_value = y_value * 0.25;

                if (matrixOfValues[rowNumber - 1][colNumber]
                        < three_quarters_y_value) {
                    matrixOfValues[rowNumber - 1][colNumber] =
                            three_quarters_y_value *
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber + 1]
                        < three_quarters_y_value) {
                    matrixOfValues[rowNumber][colNumber + 1] =
                            three_quarters_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 1][colNumber]
                        < three_quarters_y_value) {
                    matrixOfValues[rowNumber + 1][colNumber] =
                            three_quarters_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber - 1]
                        < three_quarters_y_value) {
                    matrixOfValues[rowNumber][colNumber + 1] =
                            three_quarters_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 2][colNumber]
                        < half_y_value) {
                    matrixOfValues[rowNumber - 2][colNumber] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 1][colNumber + 1]
                        < half_y_value) {
                    matrixOfValues[rowNumber - 1][colNumber + 1] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber + 2]
                        < half_y_value) {
                    matrixOfValues[rowNumber][colNumber + 2] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 1][colNumber + 1]
                        < half_y_value) {
                    matrixOfValues[rowNumber + 1][colNumber + 1] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 2][colNumber]
                        < half_y_value) {
                    matrixOfValues[rowNumber + 2][colNumber] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 1][colNumber - 1]
                        < half_y_value) {
                    matrixOfValues[rowNumber + 1][colNumber - 1] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber - 2]
                        < half_y_value) {
                    matrixOfValues[rowNumber][colNumber - 2] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 1][colNumber - 1]
                        < half_y_value) {
                    matrixOfValues[rowNumber - 1][colNumber - 1] =
                            half_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 3][colNumber]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber - 3][colNumber] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 2][colNumber + 1]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber - 2][colNumber + 1] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 1][colNumber + 2]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber - 1][colNumber + 2] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber + 3]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber][colNumber + 3] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 1][colNumber + 2]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber + 1][colNumber + 2] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 2][colNumber + 1]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber + 2][colNumber + 1] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 3][colNumber]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber + 3][colNumber] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 2][colNumber - 1]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber + 2][colNumber - 1] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber + 1][colNumber - 2]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber + 1][colNumber - 2] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber][colNumber - 3]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber][colNumber - 3] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 1][colNumber - 2]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber - 1][colNumber - 2] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

                if (matrixOfValues[rowNumber - 2][colNumber - 1]
                        < one_quarter_y_value) {
                    matrixOfValues[rowNumber - 2][colNumber - 1] =
                            one_quarter_y_value*
                            (0.5 + random.nextDouble());
                }

            }
            System.out.println("");
        }
    }

    /*
     * print Shape, appearance values, geometry
     */
    private static String printWrlFirst() {
        String printOut = "#VRML V2.0 utf8\n\n";
        printOut += "# This wrl was generated by program ";
        printOut += "GenerateElevationsWrl.java\n\n";
        printOut += "Shape {\n";
        printOut += "    appearance Appearance {\n";
        printOut += "        material Material {}\n";
        printOut += "        texture ImageTexture { ";
        printOut += "url \"grasstexture.png\" }\n";
        printOut += "    }\n";
        printOut += "    geometry ElevationGrid {\n";
        printOut += "        xDimension  " + xDimension + LINE_BREAK;
        printOut += "        zDimension  " + zDimension + LINE_BREAK;
        printOut += "        xSpacing    " + X_SPACING + LINE_BREAK;
        printOut += "        zSpacing    " + Z_SPACING + LINE_BREAK;
        printOut += "        solid       FALSE\n";
        printOut += "        creaseAngle " + CREASE_ANGLE + LINE_BREAK;
        printOut += "        height [\n";
        return printOut;
    }

    /*
     *
     */
    private static String printWrlHeightValues() {

        String lineOut = INDENT_12;
        String printOut = "";
        for (int z = 0; z < zDimension; z++) {
            int lineElementCount = 0; // use to print no more than max per line
            for (int x = 0; x < xDimension; x++) {
                lineOut += decFormat.format(matrixOfValues[x][z]);
                lineOut += ", ";
                lineElementCount += 1;
                if (lineElementCount >= MAX_ELEMENTS_PER_LINE) {
                    lineOut += LINE_BREAK;
                    printOut += lineOut;
                    lineOut = INDENT_12;
                    lineElementCount = 0;
                }
            }
            // print the rest of x dimension line if there is more
            if (lineOut.length() > INDENT_12.length()) {
                lineOut += LINE_BREAK;
                printOut += lineOut;
                lineOut = INDENT_12;
            }
        }
        return printOut;
    }
}
