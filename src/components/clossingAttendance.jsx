import { Fragment, useEffect, useState } from "react";

const TextArea = ({
  opt,
  setShowTextArea,
  handleBackClick,
  handleSelectAnswer,
  comment,
  setComment,
}) => {
  useEffect(() => {
    setShowTextArea(true);
  }, []);

  const handleChangeCommentText = (event) => {
    setComment(event.target.value);
  };

  const addCommentToOrder = () => {
    handleSelectAnswer(opt, comment);
    setComment(comment);
    setShowTextArea(false);
    handleBackClick();
  };

  return (
    <div className="flex flex-col items-end gap-3">
      <textarea
        value={comment}
        onChange={handleChangeCommentText}
        placeholder={opt.label}
        className="h-40 w-full resize-none rounded-md border px-3 py-2 text-sm font-medium text-[#2E373D] outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[#D0D0D0]"
      />
      <button
        onClick={addCommentToOrder}
        className={`absolute bottom-8 right-8 h-[36px] w-[187px] bg-[#93B0C3] text-sm font-normal text-white ${
          comment.trim().length === 0 ? "opacity-30" : "opacity-100"
        }`}
      >
        Salvar e voltar
      </button>
    </div>
  );
};

const Questionnaire = ({ data, handleSubmit, loadingCloseAttendance }) => {
  const [currentQuestions, setCurrentQuestions] = useState(data);
  const [questionSelected, setQuestionSelected] = useState([]);
  const [history, setHistory] = useState([]);
  const [answersSelected, setAnswersSelected] = useState([]);
  const [comment, setComment] = useState("");

  const [showTextArea, setShowTextArea] = useState(false);

  const handleBackClick = () => {
    if (showTextArea) setShowTextArea(false);
    setQuestionSelected((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.pop();
      return updatedQuestions;
    });
    if (history.length > 0) {
      const previousQuestions = history.pop();
      setCurrentQuestions(previousQuestions);
      setHistory(history);
    }
  };

  const handleSelectAnswer = (answer, text = null) => {
    let selectedQuestion;
    const lastQuestion = questionSelected[questionSelected.length - 1];
    if (lastQuestion.pack_test_id) {
      selectedQuestion = lastQuestion.question.id;
    } else {
      selectedQuestion = lastQuestion.id;
    }

    const item = {
      question_id: selectedQuestion,
      answer_id: answer.id,
    };

    if (text && text.length > 0) {
      item.text = text;
    }

    const indexItemSelected = answersSelected.findIndex((answer) => {
      return (
        answer.answer_id === item.answer_id &&
        answer.question_id === item.question_id
      );
    });

    if (indexItemSelected !== -1 && !text) {
      const newList = answersSelected.filter((_, i) => i !== indexItemSelected);
      setAnswersSelected(newList);
    } else {
      setAnswersSelected((prevState) => [...prevState, item]);
    }
  };

  const isFirstLevel = () =>
    Array.isArray(currentQuestions) &&
    currentQuestions.some((item) => item.pack_test_id);

  const getLabel = () => {
    if (questionSelected.length === 0) return;
    const lastQuestion = questionSelected[questionSelected.length - 1];
    if (lastQuestion.pack_test_id) {
      return lastQuestion.question.label;
    }
    return lastQuestion.label;
  };

  const handleQuestionClick = (question) => {
    if (
      !isFirstLevel() &&
      question.type !== undefined &&
      question.type === ""
    ) {
      handleSelectAnswer(question);
    } else {
      setQuestionSelected((prevState) => [...prevState, question]);
      if (question.pack_test_id) {
        if (
          question.question.subquestions.length > 0 ||
          question.question.options.length > 0
        ) {
          setHistory([...history, currentQuestions]);
          setCurrentQuestions([
            ...question.question.options,
            ...question.question.subquestions,
          ]);
        }
      } else {
        if (question.subquestions.length > 0 || question.options.length > 0) {
          setHistory([...history, currentQuestions]);
          const sortedOptions = question.options.sort(
            (a, b) => a.order - b.order
          );
          const sortedSubquestions = question.subquestions.sort(
            (a, b) => a.order - b.order
          );
          setCurrentQuestions([...sortedOptions, ...sortedSubquestions]);
        }
      }
    }
  };

  const getIsChecked = (opt) => {
    const lastQuestion = questionSelected[questionSelected.length - 1];
    let questionId;
    if (lastQuestion.pack_test_id) {
      questionId = lastQuestion.question.id;
    } else {
      questionId = lastQuestion.id;
    }
    const isChecked = answersSelected.some((item) => {
      return item.question_id === questionId && item.answer_id === opt.id;
    });

    return isChecked;
  };

  const onSubmit = () => {
    handleSubmit(answersSelected);
    setComment("");
  };

  return (
    <>
      {isFirstLevel() ? (
        <>
          <div className="flex flex-col gap-2">
            <span className="text-[20px] font-bold leading-[22px] text-secondary-dark">
              Não Venda
            </span>
            <div className="grid grid-cols-2 gap-3 overflow-y-scroll">
              {currentQuestions.map((item, index) => (
                <button
                  key={index}
                  style={{
                    boxShadow: "0px 15px 20px -20px #0000002B",
                  }}
                  className={`flex ${
                    isFirstLevel() ? "h-[85px] px-4" : "min-h-[58px] px-6 py-4"
                  } items-center gap-2 rounded-[8px] border-[2px] border-[#6193AF]`}
                  onClick={() => handleQuestionClick(item)}
                >
                  {isFirstLevel() && (
                    <span
                      className={` hidden font-icons text-[28px] text-[#666767] md:flex`}
                    >
                      {item.question.icon}
                    </span>
                  )}
                  <span className="text-left text-[18px] font-bold leading-[22px] text-secondary-dark">
                    {item.question.label ? item.question.label : item.label}
                  </span>
                </button>
              ))}
            </div>
            {answersSelected.length > 0 && (
              <div className="absolute bottom-8 right-8 flex items-center justify-end">
                <button
                  className={`flex h-[36px] w-[188px] items-center justify-center bg-[#93B0C3] text-base font-normal text-white ${
                    answersSelected.length === 0 || loadingCloseAttendance
                      ? "opacity-30"
                      : "opacity-100"
                  }`}
                  type="submit"
                  disabled={
                    answersSelected.length === 0 || loadingCloseAttendance
                  }
                  onClick={onSubmit}
                >
                  Fechar atendimento
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="text-[22px] font-bold leading-[22px] text-secondary-dark">
              {getLabel()}
            </span>
            <button
              className="flex items-center gap-2"
              onClick={handleBackClick}
            >
              <span className="Icons_v2_geral-iv2-icon_backArrow2 font-icons text-[26px] text-[#666767]"></span>
              <span className="text-base font-medium leading-[18.5px] text-secondary-dark">
                Voltar
              </span>
            </button>
          </div>
          <div className="flex max-h-[450px] flex-col gap-4 overflow-y-scroll">
            {currentQuestions.map((opt, index) => {
              if (opt.type !== undefined && opt.type === "input")
                return (
                  <TextArea
                    key={index}
                    handleBackClick={handleBackClick}
                    opt={opt}
                    setShowTextArea={setShowTextArea}
                    handleSelectAnswer={handleSelectAnswer}
                    comment={comment}
                    setComment={setComment}
                  />
                );
              return (
                <div
                  key={index}
                  onClick={() => handleQuestionClick(opt)}
                  className="relative flex min-h-[58px] cursor-pointer items-center gap-2 rounded-[8px] border border-[#6BA5C4] px-6 py-4"
                >
                  <div className="customCheckboxContainer col-span-1 flex items-center justify-center">
                    {opt.type !== undefined && opt.type === "" && (
                      <>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={getIsChecked(opt)}
                        />
                        <div
                          className={`customCheckbox relative h-[20px] w-[20px] rounded-[5px] border border-[#D0D0D0] ${
                            getIsChecked(opt) ? "checked" : ""
                          }`}
                        ></div>
                      </>
                    )}
                    <span className="ml-2 text-[20px] font-bold leading-[22px] text-secondary-dark">
                      {opt.label}
                    </span>
                    {!("type" in opt) && (
                      <span className="Icons_v2_geral-iv2-icon_backArrow2 absolute right-4 rotate-180 font-icons text-[39px] text-[#666767]"></span>
                    )}
                  </div>
                </div>
              );
            })}
            {/* <button
							style={{
								boxShadow: "0px 15px 20px -20px #0000002B"
							}}
							className="flex min-h-[58px] items-center justify-between gap-2 rounded-[8px] border-[2px] border-[#6193AF] px-4 py-3"
							onClick={() => showTextArea()}
						>
							<span className="text-left text-[20px] font-bold leading-[22px] text-secondary-dark">
								{"Outros"}
							</span>
							<span className="Icons_v2_geral-iv2-icon_backArrow2 rotate-180 font-icons text-[22px] text-[#666767]"></span>
						</button> */}
          </div>
          {!showTextArea && (
            <div className="absolute bottom-8 right-8 flex items-center justify-end">
              <button
                className={`flex h-[36px] w-[188px] items-center justify-center bg-[#93B0C3] text-base font-normal text-white ${
                  answersSelected.length === 0 || loadingCloseAttendance
                    ? "opacity-30"
                    : "opacity-100"
                }`}
                type="submit"
                disabled={
                  answersSelected.length === 0 || loadingCloseAttendance
                }
                onClick={onSubmit}
              >
                Fechar atendimento
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

const ClosingAttendance = ({
  onSubmit,
  allQuestions,
  loadingCloseAttendance,
  loaderQuestions,
  titleQuestion,
  showCloseButton = false,
  onClose,
}) => {
  const handleSubmit = (result) => {
    onSubmit(result);
  };

  return (
    <div className="pb-4">
      <div
        className={`flex min-h-[54px] items-center ${
          showCloseButton ? "justify-between" : "justify-start"
        } rounded-t-[16px] border-b border-[#F0F0F0] bg-[#E8EFF3] px-6`}
      >
        <p className="text-[24px] font-bold uppercase text-[#666767]">
          {titleQuestion}
        </p>
        {showCloseButton && (
          <button onClick={onClose}>
            <span className="Icons_v2_geral-iv2-icon_close inline-block font-icons text-xl text-secondary-dark"></span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6 px-6 pb-3 pt-6">
        {allQuestions.length === 0 ? (
          <p>Não há opções para esta loja</p>
        ) : (
          <Questionnaire
            data={allQuestions}
            handleSubmit={handleSubmit}
            loadingCloseAttendance={loadingCloseAttendance}
          />
        )}
      </div>
    </div>
  );
};

export default ClosingAttendance;
