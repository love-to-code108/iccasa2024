// CHAKRA UI
import {
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  TableContainer,
} from '@chakra-ui/react'


export const Registration = () => {
  return (
    <div className=' flex flex-col 2xl:px-32 2xl:py-16'>


      {/* IMPORTANT DATES */}
      <div className=' 2xl:w-[52rem] 2xl:text-2xl 2xl:mb-16'>
        <h1 className=' font-bold 2xl:text-4xl 2xl:ml-8 2xl:mb-8 '>Important Dates</h1>
        <TableContainer>
          <Table variant='simple' colorScheme="blue" size="lg">
            <Tbody>
              <Tr>
                <Td>Call for paper/abstract submission</Td>
                <Td>15th Aug 2024</Td>

              </Tr>
              <Tr>
                <Td>Call for paper/Abstract submission ending date </Td>
                <Td>15th Sep 2024</Td>

              </Tr>
              <Tr>
                <Td>Registration starting date</Td>
                <Td>15th Aug 2024</Td>
              </Tr>
              <Tr>
                <Td>Registration ending date</Td>
                <Td>15th Sep 2024</Td>

              </Tr>
              <Tr>
                <Td>Accommodation booking date</Td>
                <Td>30th Oct - 10th Nov</Td>

              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </div>


      {/* REGISTRATION FEE FOR PUBLICATION + PAPER PRESENTATION */}
      <div className=''>
        <ul className=' 2xl:text-4xl font-bold list-disc'><li>Registration fee for publication + paper presentation</li></ul>

        <TableContainer width="10rem" maxWidth="43rem">
          <Table variant='striped' colorScheme="blue" size="md">
            <Tbody>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tr>
                <Td>Call for paper/abstract submission</Td>
                <Td>15th Aug 2024</Td>

              </Tr>
              <Tr>
                <Td>Call for paper/Abstract submission ending date </Td>
                <Td>15th Sep 2024</Td>

              </Tr>
              <Tr>
                <Td>Registration starting date</Td>
                <Td>15th Aug 2024</Td>
              </Tr>
              <Tr>
                <Td>Registration ending date</Td>
                <Td>15th Sep 2024</Td>

              </Tr>
              <Tr>
                <Td>Accommodation booking date</Td>
                <Td>30th Oct - 10th Nov</Td>

              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </div>


      {/* REGISTRATION ONLY FOR PAPER PUBLICATION */}
    </div>
  )
}
